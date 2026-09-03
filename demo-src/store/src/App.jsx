import React, { useEffect, useState, useCallback } from 'react';
import { matchRoute } from './routes';
import { pageStore } from './shims/inertia';
import DemoBadge from './DemoBadge';

const DEFAULT_PATH = '/';

function readHash() {
    const raw = (window.location.hash || '').replace(/^#/, '');
    return raw || DEFAULT_PATH;
}

function parse(raw) {
    const [pathname, search = ''] = raw.split('?');
    const query = {};
    new URLSearchParams(search).forEach((v, k) => { query[k] = v; });
    return { pathname: pathname || '/', search, query, full: raw };
}

class PageBoundary extends React.Component {
    constructor(props) { super(props); this.state = { error: null }; }
    static getDerivedStateFromError(error) { return { error }; }
    componentDidCatch(error) { console.error('[demo] halaman gagal dirender:', error); }
    componentDidUpdate(prev) { if (prev.routeKey !== this.props.routeKey && this.state.error) this.setState({ error: null }); }
    render() { return this.state.error ? this.props.fallback(this.state.error) : this.props.children; }
}

function Notice({ heading, body, detail }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-4 font-bold">PKK</div>
                <h2 className="text-lg font-bold text-gray-800">{heading}</h2>
                <p className="text-sm text-gray-500 mt-2">{body}</p>
                {detail && <p className="text-[11px] text-gray-400 mt-4 break-words">{detail}</p>}
                <a href="#/" className="inline-block mt-5 bg-brand-700 hover:bg-brand-800 text-white text-sm font-medium px-4 py-2 rounded-lg">
                    Kembali ke Beranda
                </a>
            </div>
        </div>
    );
}

const SHARED = {
    auth: { user: null },
    flash: { success: null, error: null, warning: null },
    errors: {},
};

export default function App() {
    const [loc, setLoc] = useState(() => parse(readHash()));

    const sync = useCallback(() => {
        setLoc(parse(readHash()));
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!window.location.hash) window.location.hash = DEFAULT_PATH;
        window.addEventListener('hashchange', sync);
        return () => window.removeEventListener('hashchange', sync);
    }, [sync]);

    const matched = matchRoute(loc.pathname);

    let pageProps = {};
    let propError = null;
    if (matched) {
        try { pageProps = matched.route.props(loc.query, matched.params) ?? {}; }
        catch (e) { propError = e; }
    }

    pageStore.state = {
        props: { ...SHARED, ...pageProps },
        url: loc.full,
        component: matched?.route.pattern ?? loc.pathname,
    };

    useEffect(() => { pageStore.set({}); }, [loc.full]);

    if (!matched) {
        return (<><Notice heading="Halaman tidak ada di demo" body="Hanya beranda, detail produk, dan checkout yang disertakan." detail={loc.pathname} /><DemoBadge /></>);
    }
    if (propError) {
        return (<><Notice heading="Data demo tidak lengkap" body={`Bagian "${matched.route.title}" tidak punya data contoh.`} detail={String(propError.message ?? '')} /><DemoBadge /></>);
    }

    const Page = matched.route.component;

    return (
        <>
            <PageBoundary
                routeKey={loc.full}
                fallback={(err) => (
                    <Notice
                        heading="Halaman demo"
                        body={`Bagian "${matched.route.title}" memerlukan server Laravel yang tidak tersedia di versi statis ini.`}
                        detail={String(err?.message ?? '')}
                    />
                )}
            >
                <Page key={loc.full} {...pageProps} />
            </PageBoundary>
            <DemoBadge />
        </>
    );
}
