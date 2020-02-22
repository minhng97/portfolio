import React from 'react'
import { Row, Col } from 'antd';

const foot = {
    backgroundColor: "#26272C", 
    padding: "12px",
    color: "white",
    marginTop: "100px",
    position: "relative"
}
const col = {
    padding: "4px"
}
class Footer extends React.Component {
    render() {
    return (
        <>
            <Row style={foot}>
                <Col style={col} xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h5 style={{color: "#a2a2a1"}}>My prior</h5>
                    <p>Web development</p>
                    <p>Web UI/UX design</p>
                    <img src="https://s3-alpha-sig.figma.com/img/0ee8/770b/edcd695cd94b3ea202b6cf12acf70dfe?Expires=1583107200&Signature=BzHI2BgxmaTeflnsA5pFl0aQu3lqKB~5FYKLvyxvwJbLNum1DRNrlNPC20fSvD5rJYfWHkdix4cmSTMqa9gd7zaWZ9vS4vi~5VcZhURhREN-FcgbRrqEv9wfsjmghekhq5IjFei~xKekj047gNuUVpDOrDr6PQbKGbFppkdC-CbiZ4CH9SuZwhBI8gY2WK4r7VIgvq8bDGJ1A0KZ-pteRa7BiMDt~VwnoyeTHlquGwtT~RMJQMjHh~VfhgbsPMKkphX261VSlfj3nbFTj~hX2I-fs4ArqgU8HcuKOoopzhQLxc-S-ftDTQLwgEguylsLbIAszK8e9r5K9vPWpd4TPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        width="120px" height="120px" style={{ borderRadius: "128px" }} alt="pencil" />
                </Col>

                <Col style={col} xs={24} sm={24} md={24} lg={8} xl={8}>
                    <img src="https://s3-alpha-sig.figma.com/img/347d/820a/252247d1b2d4a02a20b2d73935db823d?Expires=1583107200&Signature=Wf8YbdffgOYxDza2~ktcaipK6VDv-C1ryXefqMXXc7-HLHWa1R6WJfVGicsxqUTkPGcM5sl3DMarlF04KJoXMSWRl7U0N3bMsQzi5Yms7moHXVdPpF-V3Zu3nFiw~7y75zcRktrWblJIT4wX0-SSSQsSrPkDMhJUN6EwaX6oN1NkBPENUTFvnhYohP7Vrhd-YJ6Tn~aD1-IS7eyVAFJXeLOvPvkoIAQf6CWNK~AKxqsNZvo6ycvh6p6e~1pwkL4t-YW3~0iJkzm1Fg5R0NpadwDajYIJc77DHrJkIRIb43wF0abuXIOgbtbivEVbBrDBu64vV9BcBnik1n-SQ4vqNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        width="120px" height="120px" style={{ borderRadius: "128px" }} alt="book" />
                    <h5 style={{color: "#a2a2a1"}}>Contact me</h5>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Github</p>

                </Col>

                <Col style={col} xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h5 style={{color: "#a2a2a1"}}> tell me something?</h5>
                    <p>- My gmail: minh.nineseven@gmail.com</p>
                    <img src="https://s3-alpha-sig.figma.com/img/0fb5/8bd6/d4c789967bf612145c40d63a27055469?Expires=1583107200&Signature=J2iPPxsJQbwCHnajclWPeg2Jt15hNJrd8-Y~6vyV8HYfJFkIHWfQ2mjFNhnXNc2-3b5hFDfLkgfaCVxRs2uG3M4edMlnK6icfnMi2Jza8Td0NlDdUJInwhluL5t056XfIS064eFGrxrba6s5bQoD5LVZ34qYIPUrBSc80D2YKXl7iqhILsmzdPT251WhuNLFrW-bD8C4ILxE4IZwXRBdEPj~pGprUF6euGzhYrx-Sgy5s-Fo796tP0aI2rY5xjuwdh2h9tjgirXbuTjbyRU6shpBCccAYe0sRR-iDO~8HM-eAoU0n~ycVZUrYULgmT5KsNq51knD5-T0br-kDp14xQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        width="120px" height="120px" style={{ borderRadius: "128px" }} alt="pen" />

                </Col>
            </Row>
        </>
    )
    }
}

export default Footer