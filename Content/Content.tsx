import React from 'react';
import styles from './Content.module.scss';

type ContentProps = {
    children: React.ReactNode;
    gap?: 0 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 150;
    paddingY?: 0 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 150;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Content = ({ gap = 0, paddingY = 0, children }: ContentProps) => {
    const computedGap = `var(--space-${gap})`;
    const computedPaddingY = `var(--space-${paddingY})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--gap': computedGap,
        '--padding-y': computedPaddingY,
    };

    return (
        <div className={styles.Content} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Content;
