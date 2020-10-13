import React from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';

function SearchBar () {
    return (
        <Form inline>
                    <FormControl type="text" placeholder="¿Que estas buscando?" className="mr-sm-2" />
                    <Button variant="outline-success"><i class="fas fa-search"></i></Button>
        </Form>
    )
}

export default SearchBar;