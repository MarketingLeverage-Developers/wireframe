import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
    gap?: number;
    paddingY?: number;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Container = ({ gap = 0, paddingY = 0, children }: ContainerProps) => {
    const computedGap = `var(--space-${gap})`;
    const computedPaddingY = `var(--space-${paddingY})`;

    const cssVariables: CSSPropertiesWithVars = {
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
