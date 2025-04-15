import React from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    fontSize?:
        | 14
        | 15
        | 16
        | 17
        | 18
        | 20
        | 22
        | 24
        | 26
        | 28
        | 30
        | 32
        | 35
        | 38
        | 40
        | 46
        | 50
        | 56
        | 60
        | 64
        | 70
        | 100
        | 120;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    children: React.ReactNode;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Text = ({
    fontSize = 14,
    fontWeight = 400,
    color = '#000',
    textAlign = 'left',
    children,
    style,
    className,
    ...props
}: TextProps) => {
    // fontSize가 number면 'px' 단위를 붙이고, 문자열이면 그대로 사용
    const computedFontSize = `var(--font-size-${fontSize})`;
    const computedFontWeight = fontWeight;
    const computedColor = color;
    const computedTextAlign = textAlign;

    const cssVariables: CSSPropertiesWithVars = {
        '--font-size': computedFontSize,
        '--font-weight': computedFontWeight,
        '--color': computedColor,
        '--text-align': computedTextAlign,
    };

    return (
        <span {...props} className={classNames(styles.Text, className)} style={{ ...cssVariables, ...style }}>
            {children}
        </span>
    );
};

export default Text;
