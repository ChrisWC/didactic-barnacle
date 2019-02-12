import React, { useState } from 'react';
import Button from '../Button';
import './List.scss';
import { Block } from '../../utils/bem';

const style = Block("List");

function List({items, hasNext, ItemComponent, load, loadMore, selectItem, unselectItem, shouldUpdate, loadProps}) {
  let [loaded, setLoaded] = useState(false);

  // we could just check props.items but if we never get any
  // then we would just be continously making network requests
  if (!loaded) {
    setLoaded(true);
    load(loadProps);
  }

  // When we have an update available we should update but
  // we should not update the state let the container signal
  // a refresh of the component instead or we will run into
  // an infinite loop
  if (loaded && shouldUpdate) {
    load(loadProps);
  }

  return (
    <div
      className={style('container')({bare: true})}
    >
      <div
        className={style('content')({bare: true})}
      >
      {
        items.map((itemProps) => {
          return <ItemComponent
            {...itemProps}
            key={itemProps.id}
            select={selectItem}
            unselect={unselectItem}
          />
        })
      }
      </div>
      {
        hasNext &&
        <Button onClick={() =>{
          loadMore(loadProps)
        }}>Load More</Button>
      }
    </div>
  );
}

List.defaultProps = {
  items: []
}

export default List;
