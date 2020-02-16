import React from "react";
import ConfirmDialogComponent, {ConfirmOptions} from "./confirmDialog";

const ConfirmationServiceContext = React.createContext<(options: ConfirmOptions) => Promise<void>>(Promise.reject);

export const useConfirmation = () =>
    React.useContext(ConfirmationServiceContext);

export const ConfirmationServiceProvider: React.FC = ({children}) => {
    const [
        confirmationState,
        setConfirmationState
    ] = React.useState<ConfirmOptions | null>(null);

    const awaitingPromiseRef = React.useRef<{
        resolve: () => void;
        reject: () => void;
    }>();

    const openConfirmation = (options: ConfirmOptions) => {
        setConfirmationState(options);
        return new Promise<void>((resolve, reject) => {
            awaitingPromiseRef.current = {resolve, reject};
        });
    };

    const handleClose = () => {
        if (confirmationState!.catchOnCancel && awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject();
        }

        setConfirmationState(null);
    };

    const handleSubmit = () => {
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.resolve();
        }

        setConfirmationState(null);
    };

    return (
        <>
            <ConfirmationServiceContext.Provider
                value={openConfirmation}
                children={children}
            />

            <ConfirmDialogComponent
                open={Boolean(confirmationState)}
                onSubmit={handleSubmit}
                onCancel={handleClose}
                {...confirmationState}
            />
        </>
    );
};
