import React from "react"

type BlogTableProps = {
    mdTable?: string
    jsTable?: Array<Array<React.ReactNode>>
}

const BlogTable: React.FC<BlogTableProps> = ({mdTable, jsTable}) => {
    // @ts-ignore
    const nargs = !!mdTable + !!jsTable
    if (nargs !== 1) {
        throw("exactly one of mdTable and jsTable args must be provided")
    }

    if (mdTable) {
        jsTable = []
        mdTable.split("\n").map((row, i) => {
            if (i !== 1) {
                jsTable?.concat(row.split("|"))
            }
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    {jsTable && jsTable[0] && jsTable[0].map(col => <td>{col}</td>)}
                </tr>
            </thead>
            <tbody>
                {
                    jsTable && jsTable.map((row, i) => (i &&
                        <tr>
                            {row.map(col => <td>{col}</td>)}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default BlogTable