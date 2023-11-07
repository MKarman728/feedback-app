import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import { useContext } from 'react';
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {
  const {deleteFeedback} = useContext(FeedbackContext);
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close">
            <FaTimes onClick ={()=>deleteFeedback(item.id)} color='purple' handleDelete ={(id)=>console.log(id)}/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default FeedbackItem