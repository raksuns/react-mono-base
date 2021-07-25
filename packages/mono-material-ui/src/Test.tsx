import React, {
    Component,
    createElement,
    useEffect,
    useRef,
    useState,
    ErrorInfo,
    ReactElement,
    ComponentType,
    HtmlHTMLAttributes,
} from 'react';

export interface TestProps {
    className?: string;
}

const Test = ({...props}: TestProps): JSX.Element => {
    return (
        <div {...props}> test page </div>
    );
};

export default Test;