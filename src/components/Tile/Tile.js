import React, { useState } from 'react';
import './Tile.scss';
import { Block } from '../../utils/bem';

const style = (Element) => Block("Tile")(Element);

function Tile(props) {
  const {images, select, unselect} = props;
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={ style('container')({ bare: true, selected: selected })}
      onClick={() => {
        if (selected) {
          unselect && unselect(props);
          setSelected(false);
        } else {
          select && select(props);
          setSelected(true);
        }
      }
    }>
      <div
        style={{
          backgroundImage: `url(${images.length > 0? images[0].url:""})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className={style('image')({ bare: true })}
      />
      <div
        className={style('info')({ bare: true })}
      >
        {props.title || "Title"}
      </div>
    </div>
  );
}

export default Tile;
