import ForgeUI, { 
    render,
    useProductContext, 
    CustomField, 
    CustomFieldView, 
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

    const fieldValue = useProductContext().platformContext.fieldValue;

    return (
        <CustomFieldView>
            <Text>
                <StatusLozenge text={fieldValue || 'None'} appearance={getLozengeApperance(fieldValue)} />
            </Text>
        </CustomFieldView>
    );
};

const Edit = () => {
    const onSave = (formValue) => {
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
        <CustomFieldEdit onSave={onSave} header="Select risk" width="medium" >
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

export const renderFieldView = render(<CustomField view={<View />} />);
export const renderFieldEdit = render(<Edit />);