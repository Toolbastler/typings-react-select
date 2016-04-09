
/// <reference path="../bundle/main.d.ts" />

import * as React from "react"

import * as Select from "react-select"

class SelectTest extends React.Component<React.Props<{}>, {}> {

    render() {
        const options = [{ label: "Foo", value: "bar" }]
        return <div>
           <Select options={options} value="bar"/>
        </div>
    }

}

class SelectAsyncTest extends React.Component<React.Props<{}>, {}> {

    render() {
        return <div>
           <Select.Async />
        </div>
    }

}
