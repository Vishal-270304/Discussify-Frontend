import {Button} from 'antd'

const SubmitButton : React.FC<{text : string}> = ({text}) => {
    return (
        <Button type="primary" htmlType="submit">
        {text}
      </Button>
    )
}

export default SubmitButton;