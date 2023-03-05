import React , { useEffect , useState , memo , useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import HomePages from './HomePages';
import PropTypes from 'prop-types';

const Home = props => {
    const [image, setImage] = useState();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    const handlePreviewImage = (e) => {
        // const preview = URL.createObjectURL(e.target.files[0]);
        // console.log(preview);
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setImage(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
          }
    }
    useEffect(() => {
        console.log(1);
        return () => {
            console.log("unmount");
        }
    }, [count])
    return (
        <div>
            <h1>Preview Image</h1>
            <Form.Control onChange={handlePreviewImage} type="file" />
            {image && <img src={image} alt="thumbnail" />}
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;