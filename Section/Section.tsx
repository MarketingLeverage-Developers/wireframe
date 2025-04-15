import React from 'react';
import styles from './Section.module.scss';

type HexColor = `#${string}`;

type SectionProps = {
    children: React.ReactNode;
    backgroundColor?: HexColor;
    backgroundImage?: string;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Section = ({ backgroundColor = '#fff', backgroundImage = '', children }: SectionProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--background-image': `url(${backgroundImage})`,
    };

    return (
        <div className={styles.Section} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Section;
