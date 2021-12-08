import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page } = props;
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content="Stackbit Components Library" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            {props.children}
        </div>
    );
}
