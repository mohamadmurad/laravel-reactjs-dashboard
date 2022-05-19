import {Button, Spinner} from "react-bootstrap";


export const  SubmitButton = ({processing , text}) => {
    return (
        <Button disabled={processing} variant="primary" type="submit">
            {processing
                ? <><Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> Loading... </> : text}
        </Button>
    );
}
