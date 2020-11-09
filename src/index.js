import ForgeUI, { 
    render,
    useProductContext,
    CustomField,
    CustomFieldEdit, 
    Text, 
    Select, 
    Option, 
    StatusLozenge, 
    Fragment 
} from "@forge/ui";

const View = () => {
    const getLozengeApperance = (riskLevel) => {
        switch (riskLevel) {
            case 'low':
                return 'success';
            case 'medium':
                return 'inprogress';
            case 'high':
                return 'removed';
            default:
                return 'default'
        }
    }

    const {
        extensionContext: { fieldValue },
    } = useProductContext();

    return (
        <CustomField>
            <Text>
                <StatusLozenge text={fieldValue || 'None'} appearance={getLozengeApperance(fieldValue)} />
            </Text>
        </CustomField>
    );
};

const Edit = () => {
    const onSubmit = (formValue) => {
        const riskValue = formValue.impact * formValue.likelihood;

        if (riskValue <= 2) {
            return 'low';
        } else if (riskValue > 2 && riskValue < 6) {
            return 'medium';
        } else {
            return 'high'
        }
    }

    return (
        <CustomFieldEdit onSubmit={onSubmit} header="Select risk" width="medium" >
            <Fragment>
                <Select label="Impact" name="impact" isRequired>
                    <Option label="low" value="1" />
                    <Option label="medium" value="2" />
                    <Option label="high" value="3" />
                </Select>
                <Select label="Likelihood" name="likelihood" isRequired>
                    <Option label="low" value="1" />
                    <Option label="medium" value="2" />
                    <Option label="high" value="3" />
                </Select>
            </Fragment>
        </CustomFieldEdit>
    );
};

export const renderFieldView = render(<View />);
export const renderFieldEdit = render(<Edit />);