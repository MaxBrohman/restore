import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    return(
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, idx) => {
                            const { id, name, count, total } = item;
                            return (
                                <tr key={ id }>
                                    <td>{ idx + 1 }</td>
                                    <td>{ name }</td>
                                    <td> { count }</td>
                                    <td>{ total }</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm float-right"
                                                onClick={ () => { onDelete(id) } }>
                                            <i className="fa fa-trash-o" />
                                        </button>
                                        <button className="btn btn-outline-success btn-sm float-right"
                                                onClick={ () => { onIncrease(id) } }>
                                            <i className="fa fa-plus-circle" />
                                        </button>
                                        <button className="btn btn-outline-warning btn-sm float-right"
                                                onClick={ () => { onDecrease(id) } }>
                                            <i className="fa fa-minus-circle" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="total">
                Total: { total }
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return{
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = () => {
    return{
        onDecrease: () => {},
        onIncrease: () => {},
        onDelete: () => {}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);