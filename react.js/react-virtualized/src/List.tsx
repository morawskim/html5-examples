import React from 'react';
import {AutoSizer, CellMeasurer, CellMeasurerCache, List as ListVirtualized} from 'react-virtualized';
import {ListRowProps} from "react-virtualized/dist/es/List";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

interface ListItem {
    id: number
    image: string
    name: string
    text: string
}

const ListLoremIpsum: React.FC<{ list: ListItem[] }> = (props) => {
    const cache = new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 93
    });

    const renderRow = (options: ListRowProps) => {
        const {index, key, style, parent} = options;
        const item: ListItem = props.list[index];

        return (
            <CellMeasurer
                key={key}
                cache={cache}
                parent={parent}
                columnIndex={0}
                rowIndex={index}>
                <ListItem style={style} button component="div" divider>
                    {/*<ListItemIcon>*/}
                    {/*    <Checkbox*/}
                    {/*        edge="start"*/}
                    {/*        disableRipple*/}
                    {/*    />*/}
                    {/*</ListItemIcon>*/}
                    <ListItemAvatar>
                        <Avatar
                            alt={`Avatar n°${key}`}
                            src={item.image}
                        />
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={item.text} />
                    {/*if we uncomment this, the layout will be broken*/}
                    {/*<ListItemSecondaryAction style={{position: "relative"}}>*/}
                    {/*    <Checkbox edge="end"/>*/}
                    {/*</ListItemSecondaryAction>*/}

                    {/*bypass if we want checkobx on right side. instead of listItemSecondaryAction*/}
                    {/*<ListItemIcon>*/}
                    {/*    <Checkbox*/}
                    {/*        edge="end"*/}
                    {/*        disableRipple*/}
                    {/*    />*/}
                    {/*</ListItemIcon>*/}
                </ListItem>
            </CellMeasurer>
        );
    };

    const renderList = () => {
        return (
            <AutoSizer>
                {
                    ({width, height}) => {
                        return (
                            <ListVirtualized
                                width={width}
                                height={height}
                                deferredMeasurementCache={cache}
                                rowHeight={cache.rowHeight}
                                rowRenderer={renderRow} rowCount={props.list.length}
                                overscanRowCount={3}
                            />
                        );
                    }
                }
            </AutoSizer>
        );
    };

    return (
        <div className="list">
            <List className={'list'}  component={renderList} />
        </div>
    );
};

export default ListLoremIpsum;