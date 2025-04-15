import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
    maxWidth?: number;
    gap?: 0 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 150;
    paddingY?: 0 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 150;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Container = ({ maxWidth = 1280, gap = 0, paddingY = 0, children }: ContainerProps) => {
    const computedGap = `var(--space-${gap})`;
    const computedPaddingY = `var(--space-${paddingY})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--max-width': `${maxWidth}px`,
        '--gap': computedGap,
        '--padding-y': computedPaddingY,
    };

    return (
        <div className={styles.Container} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Container;
