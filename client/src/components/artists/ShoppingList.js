import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import { NavTabs } from '../home/NavBar';
class ShoppingList extends Component{
    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        
        const { items } = this.props.item;
        return(
        <div>
            <NavTabs/>
            <Container>
                
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name, genre, city, state }) => (
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                              <ListGroupItem>
                             
                                <h2 className="artistName">{name}</h2><h3 className="artistGenre">{genre}</h3><p className="artistHome">{city}, {state}</p>
                              </ListGroupItem>
                          </CSSTransition>  
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
            </div>
        );
    }
}
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);