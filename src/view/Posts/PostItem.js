import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const PostItem = props => {
    const { id , className , title , desc , imageUrl } = props;
    const history = useHistory();

    const handleDetailButton = () => {
      history.push({
        pathname: `/posts/${id}`
      }) 
      // Link
    }
    return (
        <Card className={className}>
        <Card.Img style={{width: "100%", height: "300px", objectFit: "cover"}} variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button onClick={() => handleDetailButton()} variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    );
};

PostItem.propTypes = {
    
};

export default PostItem;