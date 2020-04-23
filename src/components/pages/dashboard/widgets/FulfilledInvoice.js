import React from 'react';
import { Widget } from '../../../styledComponents/dashboard/Widget';
import { useSelector } from 'react-redux';

function FulfilledInvoice() {
  const paidInvoices = useSelector(
    state =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.filter(invoice => invoice.paidStatus)
        .length
  );

  return (
    <Widget color="#24B47E">
      <div className="icon">
        <i className="tio-checkmark_circle_outlined"></i>
      </div>
      <div className="widget-text">
        <h2>Fulfilled</h2>
        <p>Invoices: {paidInvoices}</p>
      </div>
    </Widget>
  );
}

export default FulfilledInvoice;
