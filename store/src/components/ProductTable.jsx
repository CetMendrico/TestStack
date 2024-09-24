import React from 'react';
import Table from './Table';
import ProductItem from './products/ProductItem';

const ProductTable = () => {
  return (
  <div>
    <Table.TableContainer>
    <Table.THead>
        <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
        </Table.Row>
    </Table.THead>

    <Table.TBody>
        <ProductItem name="Penne" price={99.9} />
        <ProductItem name="Mac" price={199.9} />
        <ProductItem name="And" price={919.9} />
        <ProductItem name="Cheese" price={991.9} />
        <ProductItem name="I Luv Mac n cheese" price={999.9} />
    </Table.TBody>
    </Table.TableContainer>
  </div>
  );
};

export default ProductTable;
