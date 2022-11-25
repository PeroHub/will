import React, { useState, useEffect} from 'react'
import { Container, Box } from '@mui/material'
// import { json } from 'react-router-dom'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Button } from '@mui/material';

export default function Will() {
const [ data, setData] = useState([])
const [ beneficiary, setBeneficiary] = useState([])


console.log(data)
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("come")))
        setBeneficiary(JSON.parse(localStorage.getItem("beneficiaries")))

    }, [])

    const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };
    

    const last = data[data.length - 1]
  return (
        <Container component="main" maxWidth="md">
            <Button
                onClick={handleDownloadPdf}
              textAlign={"end"}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Download as PDF
            </Button>
             {/* <button onClick={handleDownloadPdf}>Print</button> */}
           
                <Box  id="divToPrint" ref={printRef}>

                    <h2> Last Will and Testament of {last.willFirstName} {last.willLasttName}</h2>
                    <p>I, {last.willFirstName} {last.willLasttName}, of {last.location}, declare this to be my Will, and I revoke all Wills and Codicils previously made by me.</p>
                    <h2>Article I: Declarations</h2>
                    <p>A. Executor - I nominate my sibling {last.executor} to serve as Executor of my estate and to carry out the instructions in this Will</p>
                    <p>
                        B. Bond & Court Supervision - No bond or other security shall be required of my Executor or Digital Executor in any jurisdiction. To the extent permitted by the laws of the state in which my Will is probated, my Executor shall have the authority to administer my estate without court supervision, and no action shall be required in any court in relation to the settlement of my estate other than the probating and recording of my Will. 
                    </p>
                    <p>C. Executor Powers - I grant to my Executor the following powers:</p>
                    <ol>
                        <li>The power to exercise all powers of an absolute owner of property;</li>
                        <li>The power to retain, sell at public or private sale, exchange, grant options on, invest and reinvest, and otherwise deal with real or personal property;</li>
                        <li>The power to borrow money and pledge any property to secure loans;</li>
                        <li>he power to divide and distribute property in cash or in kind;</li>
                        <li>The power to compromise and release claims with or without consideration;</li>
                        <li>The power to pay my legally enforceable debts, funeral expenses, expenses of last illness, and all expenses in connection with the administration of my estate and the trusts created by my Will;</li>
                        <li>The power to employ attorneys, accountants and other persons for services or advice;</li>
                        <li>. Except as otherwise provided herein, the power to make, in my Executor’s discretion, any distribution required or permitted to be made to any beneficiary under this Will in any of the following ways when such beneficiary is a minor: (i) to the guardian or conservator of such</li>
                        <li>The power to perform other acts necessary or appropriate for the proper administration of my estate, execute and deliver necessary instruments, and give full receipts and discharges; and</li>
                        <li>Any additional powers conferred upon executors wherever my Executor may act</li>
                    </ol>
                    <p>D. <span style={{fontSize: "20px"}}>Expenses</span>  - My Executor shall be reimbursed for the reasonable costs and expenses incurred in connection with such Executor’s duties</p>
                    <p>E. <span style={{fontSize: "20px"}}>Reliance</span> - In acting or declining to act, my Executor may rely upon the written opinion of a competent attorney licensed and in good standing in the jurisdiction where the subject matter of any opinion is sought, any facts stated in any instrument, furnished in writing and believed to be true, or any other evidence such Executor deems sufficient. My Executor shall be indemnified and held harmless from any liability for any action taken, or for the failure to take any action, if done in good faith and without gross negligence</p>
                    <p> <span style={{fontSize: "20px"}}>Ancillary Executors</span>  - If my estate contains property located in another state or a foreign jurisdiction and my Executor cannot, or chooses not to, serve under the laws thereof, my Executor shall have the power to nominate an ancillary individual or corporate Executor of such property</p>
                    <p>G. <span style={{fontSize: "20px"}}>Digital Executor</span>  - In addition to the powers granted pursuant to Paragraph C of this Article II, I grant my Executor the power to access, use, manage, close and control my Digital Assets and Digital Accounts. If I have left a writing describing my wishes with respect to my Digital Assets and Digital Accounts, I request that my Executor follow my wishes, as expressed in that writing. If no such writing is located within thirty (30) days of my death, my Executor shall administer and distribute my Digital Assets and Digital Accounts in his or her discretion in accordance with the remaining provisions of this Will. This authorization is intended to be construed to be lawful consent under the Electronic Communications Privacy Act of 1986, as amended; the Computer Fraud and Abuse Act of 1986, as amended; and any other applicable federal or state data privacy law or criminal law. “Digital Asset” means an electronic record in which I have a right or interest “Digital Account” means an electronic system for creating, generating, sending, receiving, storing, displaying or processing information that provides access to a Digital Asset.</p>
                    <h2>Article V: Gift of Residue</h2>
                    <p>All of the residue of my estate shall be distributed to the following beneficiaries in the noted percentages:</p>
                    <>
                    {beneficiary.map((item) => (
                        <p key={item.firstName}>
                            {`${item.asset}%`} shall be ditributed to {`${item.firstName} ${item.lastName}`}
                        </p>
                    ))}
                    </>
                </Box>
            
        </Container>
  )
}
