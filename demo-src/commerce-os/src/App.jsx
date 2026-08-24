import React, { useEffect, useState, useCallback } from 'react';
import { matchRoute, routes } from './routes';
import { pageStore } from './shims/inertia';
import * as D from './data/seed';
import DemoBadge from './DemoBadge';

const DEFAULT_PATH = '/admin/dashboard';

function readHash() {
    const raw = (window.location.hash || '').replace(/^#/, '');
    if (!raw || raw === '/') return DEFAULT_PATH;
    return raw;
}

function parse(raw) {
    const [pathname, search = ''] = raw.split('?');
    const query = {};
    new URLSearchParams(search).forEach((v, k) => { query[k] = v; });
    return { pathname, search, query, full: raw };
}

// ── Error boundary ──────────────────────────────────────────────────
class PageBoundary extends React.Component {
    constructor(props) { super(props); this.state = { error: null }; }
    static getDerivedStateFromError(error) { return { error }; }
    componentDidCatch(error) { console.error('[demo] halaman gagal dirender:', error); }
    componentDidUpdate(prev) { if (prev.routeKey !== this.props.routeKey && this.state.error) this.setState({ error: null }); }
    render() {
        if (this.state.error) return this.props.fallback(this.state.error);
        return this.props.children;
    }
}

function Fallback({ title, error }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 font-bold">RHK</div>
                <h2 className="text-lg font-bold text-gray-800">Halaman demo</h2>
                <p className="text-sm text-gray-500 mt-2">
                    Modul <b className="text-gray-700">{title}</b> memerlukan koneksi ke server Laravel yang tidak tersedia
                    di versi statis ini. Silakan pilih menu lain di sidebar.
                </p>
                <p className="text-[11px] text-gray-400 mt-4 break-words">{String(error?.message ?? '')}</p>
                <a href="#/admin/dashboard" className="inline-block mt-5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
                    Kembali ke Dashboard
                </a>
            </div>
        </div>
    );
}

function NotFound({ pathname }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <h2 className="text-lg font-bold text-gray-800">Rute tidak tersedia di demo</h2>
                <p className="text-sm text-gray-500 mt-2 break-all">{pathname}</p>
                <a href="#/admin/dashboard" className="inline-block mt-5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
                    Kembali ke Dashboard
                </a>
            </div>
        </div>
    );
}

const SHARED = {
    auth: { user: D.authUser },
    flash: { success: null, error: null, warning: null, snap_error: null },
    errors: {},
};

export default function App() {
    const [loc, setLoc] = useState(() => parse(readHash()));

    const sync = useCallback(() => {
        const next = parse(readHash());
        setLoc(next);
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!window.location.hash) window.location.hash = DEFAULT_PATH;
        window.addEventListener('hashchange', sync);
        return () => window.removeEventListener('hashchange', sync);
    }, [sync]);

    const matched = matchRoute(loc.pathname);

    // Data untuk endpoint fetch yang di-stub.
    window.__DEMO_REVENUE__ = D.dashboardStats.revenue;
    window.__DEMO_SERIES__ = D.dashboardCharts.daily;

    let pageProps = {};
    let propError = null;
    if (matched) {
        try { pageProps = matched.route.props(loc.query, matched.params) ?? {}; }
        catch (e) { propError = e; }
    }

    // Simpan state halaman untuk usePage() di shim.
    pageStore.state = {
        props: { ...SHARED, ...pageProps, ziggy: { location: `https://portal-demo.local${loc.pathname}`, url: 'https://portal-demo.local' } },
        url: loc.full,
        component: matched?.route.pattern ?? loc.pathname,
    };

    useEffect(() => {
        pageStore.set({});
    }, [loc.full]);

    if (!matched) return (<><NotFound pathname={loc.pathname} /><DemoBadge /></>);
    if (propError) return (<><Fallback title={matched.route.title} error={propError} /><DemoBadge /></>);

    const Page = matched.route.component;

    return (
        <>
            <PageBoundary
                routeKey={loc.full}
                fallback={(err) => <Fallback title={matched.route.title} error={err} />}
            >
                <Page key={loc.full} {...pageProps} />
            </PageBoundary>
            <DemoBadge />
        </>
    );
}

export { routes };
