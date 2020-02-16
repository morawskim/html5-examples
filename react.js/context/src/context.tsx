import React from 'react';

export interface AppContextInterface {
    theme: 'dark' | 'light'
}

export const AppContext = React.createContext<AppContextInterface|null>(null);
export const AppProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
export const useAppContext = () => React.useContext(AppContext);

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export function withAppContext<
    P extends { appContext: AppContextInterface },
    R = Omit<P, 'appContext'>
    >(
    Component: React.ComponentClass<P> | React.FC<P>
): React.FC<R> {
    return function BoundComponent(props: R) {
        return (
            <AppContextConsumer>
                {value => <Component {...props as any} appContext={value} />}
            </AppContextConsumer>
        );
    };
}
