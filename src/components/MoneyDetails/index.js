import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props

  return (
    <div className="money-details-container">
      <div className="your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="category-image"
          alt="balance"
        />
        <div>
          <p className="category-heading">Your Balance</p>
          <p data-testid="balanceAmount">{yourBalance}</p>
        </div>
      </div>
      <div className="your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="category-image"
          alt="income"
        />
        <div>
          <p className="category-heading">Your Income</p>
          <p data-testid="incomeAmount">{yourIncome}</p>
        </div>
      </div>
      <div className="your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="category-image"
          alt="expenses"
        />
        <div>
          <p className="category-heading">Your Expenses</p>
          <p data-testid="expensesAmount">{yourExpenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
