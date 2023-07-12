import { NextPage } from "next";

interface GetLayout<P> {
    (page: JSX.Element, props: P): JSX.Element;
}

export type PageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
    getLayout: GetLayout<P>;
};