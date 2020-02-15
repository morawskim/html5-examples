import React, {ReactNode, useState} from 'react';

interface ShowAction {
    type: "more" | "less"
}

export interface ShowAllProps {
    limit: number
    total: number
    onClick: (action: ShowAction) => void
}

interface ShowSomeProps {
    defaultLimit: number
    showAllComponent?: React.ComponentType<ShowAllProps>
}

const isShowAllElements = (limit: number, total: number) => limit >= total;

const hasMoreElement = (children: ReactNode[], limit: number) => children.length > limit;

const ShowToggleButton: React.FC<ShowAllProps> = props => {
    const showingAllElement = isShowAllElements(props.limit, props.total);

    return (
        <button
            onClick={() => props.onClick({type: showingAllElement ? 'less' : 'more'})}
            className={'btn-link btn'}
        >
            {showingAllElement ? 'Show less' : 'Show more'}
        </button>
    );
};

const ShowSome: React.FC<ShowSomeProps> = props => {
    const elements = React.Children.toArray(props.children);
    const [limit, setLimit] = useState<number>(props.defaultLimit);

    const clickHandler = (action: ShowAction) => {
        if (action.type === 'more') {
            setLimit((prevState => prevState + 10));
        } else {
            setLimit(props.defaultLimit);
        }
    };

    const renderToggleBtn = () => {
        const Component = props.showAllComponent!;
        return (
            <Component
                onClick={clickHandler}
                limit={limit}
                total={elements.length}
            />
        );
    };

    if (hasMoreElement(elements, limit)) {
        return (
            <>
                {elements.slice(0, limit)}
                {renderToggleBtn()}
            </>
        );
    }

    return (
        <>
            {props.children}
            {(elements.length > props.defaultLimit && isShowAllElements(limit, elements.length)) && renderToggleBtn()}
        </>
    );
};
ShowSome.defaultProps = {
    showAllComponent: ShowToggleButton
};
export default ShowSome;
