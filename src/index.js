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


const data = [
    {
        value: "100",
        label: "100 Continue",
        color: "#36B37E",
    },
    {
        value: "101",
        label: "101 Switching Protoco",
        color: "#36B37E",
    },
    {
        value: "102",
        label: "102 Processing",
        color: "#36B37E",
    },
    {
        value: "200",
        label: "200 OK",
        color: "#FFAB00",
    },
    {
        value: "201",
        label: "201 created",
        color: "#FFAB00",
    },
    {
        value: "202",
        label: '202 Accepted',
        color: '#FFAB00'
    },
    {
        value: "203",
        label: '203 Non-authoritative Information',
        color: '#FFAB00'
    },
    {
        value: "204",
        label: '204 No Content',
        color: '#FFAB00'
    },
    {
        value: "205",
        label: '205 Reset Content',
        color: '#FFAB00'
    },
    {
        value: "206",
        label: '206 Partial Content',
        color: '#FFAB00'
    },
    {
        value: "207",
        label: '207 Multi-Status',
        color: '#FFAB00'
    },
    {
        value: "208",
        label: '208 Already Reported',
        color: '#FFAB00'
    },
    {
        value: "226",
        label: '226 IM used',
        color: '#FFAB00'
    },
    {
        value: "300",
        label: '300 Multiple choices',
        color: "#FF5630"
    },
    {
        value: "301",
        label: '301 Moved Permanently',
        color: '#FF5630'
    },
    {
        value: "302",
        label: '302 Found',
        color: '#FF5630'
    },
    {
        value: "303",
        label: '303 See Other',
        color: '#FF5630'
    },
    {
        value: "304",
        label: '304 Not Modified',
        color: '#FF5630'
    },
    {
        value: "305",
        label: '305 Use Proxy',
        color: '#FF5630'
    },
    {
        value: "307",
        label: '307 Temporary Redirect',
        color: '#FF5630'
    },
    {
        value: "308",
        label: '308 Permanent Redirect',
        color: '#FF5630'
    },
    {
        value: "400",
        label: '400 Bad Request',
        color: '#00B8D9'
    },
    {
        value: "401",
        label: '401 Unauthorized',
        color: '#00B8D9'
    },
    {
        value: "402",
        label: '402 Payment Required',
        color: '#00B8D9'
    },
    {
        value: "403",
        label: '403 Forbidden',
        color: '#00B8D9'
    },
    {
        value: "404",
        label: '404 Not Found',
        color: '#00B8D9'
    },
    {
        value: "405",
        label: '405 Method Not Allowed',
        color: '#00B8D9'
    },
    {
        value: "406",
        label: '406 Not Acceptable',
        color: '#00B8D9'
    },
    {
        value: "407",
        label: '407 Proxy Authentication Required',
        color: '#00B8D9'
    },
    {
        value: "408",
        label: '408 Request Timeout',
        color: '#00B8D9'
    },
    {
        value: "409",
        label: '409 Conflict',
        color: '#00B8D9'
    },
    {
        value: "410",
        label: '410 Gone',
        color: '#00B8D9'
    },
    {
        value: "411",
        label: '411 Length Required',
        color: '#00B8D9'
    },
    {
        value: "412",
        label: '412 Precondition Failed',
        color: '#00B8D9'
    },
    {
        value: "413",
        label: '413 Payload Too Large',
        color: '#00B8D9'
    },
    {
        value: "414",
        label: '414 Request URL Too Long',
        color: '#00B8D9'
    },
    {
        value: "415",
        label: '415 Unsupported Media Type',
        color: '#00B8D9'
    },
    {
        value: "416",
        label: '416 Requested Range Not Satisfiable',
        color: '#00B8D9'
    },
    {
        value: "417",
        label: '417 Expectation Failed',
        color: '#00B8D9'
    },
    {
        value: "418",
        label: '418 I am a Teapot',
        color: '#00B8D9'
    },
    {
        value: "421",
        label: '421 Misdirected Request',
        color: '#00B8D9'
    },
    {
        value: "422",
        label: '422 Unprocessable Entity',
        color: '#00B8D9'
    },
    {
        value: "423",
        label: '423 Locked ',
        color: '#00B8D9'
    },
    {
        value: "424",
        label: '424 Failed Dependency',
        color: '#00B8D9'
    },
    {
        value: "426",
        label: '426 Upgrade Required',
        color: '#00B8D9'
    },
    {
        value: "428",
        label: '428 Precondition Required',
        color: '#00B8D9'
    },
    {
        value: "429",
        label: '429 Too Many Requests',
        color: '#00B8D9'
    },
    {
        value: "431",
        label: '431 Request Header Fields Too Large',
        color: '#00B8D9'
    },
    {
        value: "444",
        label: '444 Connection Closed Without Response',
        color: '#00B8D9'
    },
    {
        value: "451",
        label: '451 Unavailabe For Legal Reasons',
        color: '#00B8D9'
    },
    {
        value: "499",
        label: '499 Client Closed Request',
        color: '#00B8D9'
    },
    {
        value: "500",
        label: '500 Internal Server Error',
        color: '#6554C0'
    },
    {
        value: "501",
        label: '501 Not Implemented',
        color: '#6554C0'
    },
    {
        value: "502",
        label: '502 Bad Gateway',
        color: '#6554C0'
    },
    {
        value: "503",
        label: '503 Service Unavailable',
        color: '#6554C0'
    },
    {
        value: "504",
        label: '504 Gateway Timeout',
        color: '#6554C0'
    },
    {
        value: "505",
        label: '505 HTTP Version Not Supported',
        color: '#6554C0'
    },
    {
        value: "506",
        label: '506 Variant Also Negotiates',
        color: '#6554C0'
    },
    {
        value: "507",
        label: '507 Insufficient Storage',
        color: '#6554C0'
    },
    {
        value: "508",
        label: '508 Loop Detected',
        color: '#6554C0'
    },
    {
        value: "510",
        label: '510 Not Extended',
        color: '#6554C0'
    },
    {
        value: "511",
        label: '511 Network Authentication Required',
        color: '#6554C0'
    },
    {
        value: "599",
        label: '599 Network Connect Timeout Error',
        color: '#6554C0'
    }
];

const View = () => {
    const getLozengeApperance = (statusValue) => {
        if (statusValue < 200) {
            return 'default';
        } else if (statusValue >= 200 && statusValue < 300) {
            return 'success';
        } else if (statusValue >= 300 && statusValue < 400) {
            return 'moved'
        } else if (statusValue >= 400 && statusValue < 500) {
            return 'removed'
        } else {
            return 'new'
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
    const onSubmit = (values) => {
        return values.response;
    }

    return (
        <CustomFieldEdit onSubmit={onSubmit} header="Select Status" width="medium" >
            <Fragment>
                <Select name="response" label="Http status" isRequired>
                    {
                        data.map((option) => {
                            return (
                                <Option key={option.value} label={option.label} value={option.value} />
                            )
                        })
                    }
                </Select>
            </Fragment>
        </CustomFieldEdit>
    );
};

export const renderFieldView = render(<View />);
export const renderFieldEdit = render(<Edit />);