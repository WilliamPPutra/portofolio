/**
 * Shim @inertiajs/react untuk demo statis.
 * Semua request server diganti navigasi client-side atau no-op yang aman.
 */
import React, { useState, useCallback, useMemo } from 'react';

// ── Page store global ───────────────────────────────────────────────
const listeners = new Set();

export const pageStore = {
    state: { props: {}, url: '/admin/dashboard', component: 'Admin/Dashboard' },
    set(next) {
        pageStore.state = { ...pageStore.state, ...next };
        listeners.forEach(fn => fn(pageStore.state));
    },
    subscribe(fn) {
        listeners.add(fn);
        return () => listeners.delete(fn);
    },
};

export function usePage() {
    const [state, setState] = useState(pageStore.state);
    React.useEffect(() => pageStore.subscribe(setState), []);
    return {
        props: state.props ?? {},
        url: state.url ?? '/',
        component: state.component ?? '',
        version: 'demo',
    };
}

// ── Navigasi ────────────────────────────────────────────────────────
// Mengubah path aplikasi ("/admin/orders?x=1") menjadi hash route demo.
export function toHash(href) {
    if (typeof href !== 'string') return '#/admin/dashboard';
    if (href.startsWith('#')) return href;
    if (/^https?:\/\//i.test(href)) return href;
    return '#' + (href.startsWith('/') ? href : '/' + href);
}

export function navigate(href) {
    const target = toHash(href);
    if (/^https?:\/\//i.test(target)) {
        window.open(target, '_blank', 'noopener');
        return;
    }
    if (window.location.hash === target) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
        window.location.hash = target.slice(1);
    }
}

// Notifikasi kecil "aksi dinonaktifkan di demo".
function demoNotice(action, href) {
    try {
        window.dispatchEvent(new CustomEvent('demo:blocked', { detail: { action, href } }));
    } catch { /* noop */ }
    // eslint-disable-next-line no-console
    console.info('[demo] aksi tulis dinonaktifkan:', action, href);
}

function finish(options = {}) {
    try { options.onStart?.(); } catch { /* noop */ }
    try { options.onSuccess?.({ props: pageStore.state.props }); } catch { /* noop */ }
    try { options.onFinish?.(); } catch { /* noop */ }
}

// ── router ──────────────────────────────────────────────────────────
export const router = {
    visit(href, options = {}) {
        const method = (options.method ?? 'get').toLowerCase();
        if (method === 'get') { navigate(href); finish(options); return; }
        demoNotice(method, href);
        finish(options);
    },
    get(href, data = {}, options = {}) {
        const qs = buildQuery(data);
        navigate(qs ? `${stripQuery(href)}?${qs}` : href);
        finish(options);
    },
    post(href, data, options = {}) { demoNotice('post', href); finish(options); },
    put(href, data, options = {}) { demoNotice('put', href); finish(options); },
    patch(href, data, options = {}) { demoNotice('patch', href); finish(options); },
    delete(href, options = {}) { demoNotice('delete', href); finish(options); },
    reload(options = {}) { finish(options); },
    replace(href, options = {}) { navigate(href); finish(options); },
    remember() {},
    restore() { return undefined; },
    on() { return () => {}; },
    cancel() {},
    flushAll() {},
};

function stripQuery(href) { return String(href ?? '').split('?')[0]; }

function buildQuery(data) {
    if (!data || typeof data !== 'object') return '';
    const p = new URLSearchParams();
    Object.entries(data).forEach(([k, v]) => {
        if (v === undefined || v === null || v === '') return;
        if (Array.isArray(v)) v.forEach(x => p.append(`${k}[]`, x));
        else p.append(k, v);
    });
    return p.toString();
}

// ── Head ────────────────────────────────────────────────────────────
export function Head({ title, children }) {
    React.useEffect(() => {
        if (title) document.title = `${title} - Portal RHK (Demo)`;
    }, [title]);
    return null;
}

// ── Link ────────────────────────────────────────────────────────────
export const Link = React.forwardRef(function Link(
    { href = '#', method = 'get', as, children, onClick, preserveScroll, preserveState, only, replace, data, headers, ...rest },
    ref,
) {
    const external = typeof href === 'string' && /^https?:\/\//i.test(href);
    const isWrite = String(method).toLowerCase() !== 'get';

    const handle = (e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (external) return; // biarkan browser buka tab baru
        e.preventDefault();
        if (isWrite) { demoNotice(method, href); return; }
        navigate(href);
    };

    if (as === 'button') {
        return <button ref={ref} type="button" onClick={handle} {...rest}>{children}</button>;
    }

    return (
        <a
            ref={ref}
            href={external ? href : toHash(href)}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={handle}
            {...rest}
        >
            {children}
        </a>
    );
});

// ── useForm ─────────────────────────────────────────────────────────
export function useForm(rememberKeyOrData, maybeData) {
    const initial = (typeof rememberKeyOrData === 'string' ? maybeData : rememberKeyOrData) ?? {};
    const initialRef = React.useRef(JSON.parse(JSON.stringify(initial)));

    const [data, setDataState] = useState(initialRef.current);
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [progress, setProgress] = useState(null);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const setData = useCallback((keyOrObj, value) => {
        setDataState(prev => {
            if (typeof keyOrObj === 'string') return { ...prev, [keyOrObj]: value };
            if (typeof keyOrObj === 'function') return keyOrObj(prev);
            return { ...prev, ...keyOrObj };
        });
    }, []);

    const submit = useCallback((method, url, options = {}) => {
        setProcessing(true);
        demoNotice(method, url);
        window.setTimeout(() => {
            setProcessing(false);
            setWasSuccessful(true);
            setRecentlySuccessful(true);
            window.setTimeout(() => setRecentlySuccessful(false), 2000);
            try { options.onSuccess?.({ props: pageStore.state.props }); } catch { /* noop */ }
            try { options.onFinish?.(); } catch { /* noop */ }
        }, 350);
    }, []);

    const reset = useCallback((...fields) => {
        setDataState(prev => {
            if (!fields.length) return JSON.parse(JSON.stringify(initialRef.current));
            const next = { ...prev };
            fields.forEach(f => { next[f] = initialRef.current[f]; });
            return next;
        });
    }, []);

    return useMemo(() => ({
        data,
        setData,
        errors,
        setError: (k, v) => setErrors(prev => (typeof k === 'string' ? { ...prev, [k]: v } : { ...prev, ...k })),
        clearErrors: (...f) => setErrors(prev => {
            if (!f.length) return {};
            const n = { ...prev }; f.forEach(x => delete n[x]); return n;
        }),
        hasErrors: Object.keys(errors).length > 0,
        processing,
        progress,
        wasSuccessful,
        recentlySuccessful,
        isDirty: JSON.stringify(data) !== JSON.stringify(initialRef.current),
        transform: () => {},
        defaults: () => {},
        reset,
        cancel: () => {},
        submit,
        get: (url, o) => submit('get', url, o),
        post: (url, o) => submit('post', url, o),
        put: (url, o) => submit('put', url, o),
        patch: (url, o) => submit('patch', url, o),
        delete: (url, o) => submit('delete', url, o),
    }), [data, errors, processing, progress, wasSuccessful, recentlySuccessful, setData, reset, submit]);
}

// ── Sisanya: no-op agar import apa pun aman ─────────────────────────
export function usePoll() { return { start() {}, stop() {} }; }
export function WhenVisible({ children, fallback = null }) { return <>{children ?? fallback}</>; }
export function Deferred({ children, fallback = null }) { return <>{children ?? fallback}</>; }
export function useRemember(initial) { return useState(initial); }
export function usePrefetch() { return { flush() {}, lastUpdatedAt: null, isPrefetching: false, isPrefetched: false }; }
export const Form = ({ children, ...rest }) => <form onSubmit={e => e.preventDefault()} {...rest}>{children}</form>;
export function createInertiaApp() { /* demo statis tidak memakai ini */ }
export const InertiaApp = () => null;
export const App = () => null;
export function setupProgress() {}

export default { Head, Link, router, useForm, usePage };
