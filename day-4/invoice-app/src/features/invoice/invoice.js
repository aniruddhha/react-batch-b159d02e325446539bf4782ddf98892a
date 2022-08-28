import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoices } from "./invoice-thunk";
import { selectInvoices } from './invoice-slice'

export function Invoice() {

    const rawInvoices = useSelector(selectInvoices)

    const dispatch = useDispatch()

    const [invoices, setInvoices] = useState(rawInvoices)

    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    const tr = invoices.map((inv, ind) => {
        return (
            <tr key={inv.id}>
                <td> {ind + 1} </td>
                <td>{inv.name}</td>
                <td>{inv.year}</td>
                <td>{inv.pantone_value}</td>
                <td>{'❌'} { '✅'}</td>
            </tr>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <h3> Invoices </h3>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Year</th>
                            <th scope="col">Value</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tr}
                    </tbody>
                </table>
            </div>
        </div>
    )
}