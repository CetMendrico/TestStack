import React from 'react';
import Table from "../Table";

const ProductItem = (props) => {
  return  (
    <Table.Row>
        <Table.Column>{props.name}</Table.Column>
        <Table.Column>
            ${props.price.toFixed(2)}
            </Table.Column>
    </Table.Row>
  );
}

export default ProductItem;
