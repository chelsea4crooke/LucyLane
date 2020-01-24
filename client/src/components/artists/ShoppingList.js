import React, { Component } from 'react';
import { ListGroup, Row, Col  } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import "./artists.css";

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
          <main className="artistsBody"> 
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name, genre, city, state, link, img }) => (
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                              <Row>
                              {/* <ListGroupItem> */}
                                <Col><img src={img} width="200px" height="200px"/></Col>
                                <Col><h2 className="artistName"><a href={link}>{name}</a></h2><h3 className="artistGenre">{genre}</h3><p className="artistHome">{city}, {state}</p></Col>
                                
                              {/* </ListGroupItem> */}
                              </Row>
                          </CSSTransition>  
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <br></br>
            </main>
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