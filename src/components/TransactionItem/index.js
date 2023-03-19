import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id, amount, type)
  }

  let displayType

  if (type === 'INCOME') {
    displayType = 'Income'
  } else {
    displayType = 'Expenses'
  }

  return (
    <li className="transaction-Item">
      <p className="transaction-type">{title}</p>
      <p className="transaction-type">{amount}</p>
      <p className="transaction-type">{displayType}</p>
      <button type="button" data-testid="delete" onClick={onDeleteTransaction}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
