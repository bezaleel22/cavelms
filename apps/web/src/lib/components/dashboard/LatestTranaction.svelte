<script>
  import {
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table,
    Button,
  } from "sveltestrap";

  const orders = [
    {
      id: "1",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      orderdate: "07 Oct, 2019",
      total: "$400",
      badgeclass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
    },
    {
      id: "2",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      orderdate: "07 Oct, 2019",
      total: "$380",
      badgeclass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
    },
    {
      id: "3",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      orderdate: "06 Oct, 2019",
      total: "$384",
      badgeclass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
    },
    {
      id: "4",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      orderdate: "05 Oct, 2019",
      total: "$412",
      badgeclass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
    },
    {
      id: "5",
      orderId: "#SK2544",
      billingName: "Ronald Taylor",
      orderdate: "04 Oct, 2019",
      total: "$404",
      badgeclass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
    },
    {
      id: "6",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      orderdate: "04 Oct, 2019",
      total: "$392",
      badgeclass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
    },
  ];

  let modal = false;

  const togglemodal = () => (modal = !modal);
</script>

<Card>
  <CardBody>
    <div class="mb-4 h4 card-title">Latest Transaction</div>
    <div class="table-responsive">
      <table class="table align-middle table-nowrap mb-0">
        <thead class="table-light">
          <tr>
            <th style="width: 20px;">
              <div class="form-check font-size-16 align-middle">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="transactionCheck01"
                />
                <label class="form-check-label" for="transactionCheck01" />
              </div>
            </th>
            <th class="align-middle">Order ID</th>
            <th class="align-middle">Billing Name</th>
            <th class="align-middle">Date</th>
            <th class="align-middle">Total</th>
            <th class="align-middle">Payment Status</th>
            <th class="align-middle">Payment Method</th>
            <th class="align-middle">View Details</th>
          </tr>
        </thead>
        <tbody>
          {#each orders as order}
            <tr>
              <td>
                <div class="form-check font-size-16">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="transactionCheck02"
                  />
                  <label class="form-check-label" for="transactionCheck02" />
                </div>
              </td>
              <td
                ><a href="/" class="text-body fw-bold">{order.orderId}</a>
              </td>
              <td>{order.billingName}</td>
              <td>
                {order.orderdate}
              </td>
              <td>
                {order.total}
              </td>
              <td>
                <span
                  class={"badge badge-pill badge-soft-" +
                    order.badgeclass +
                    " font-size-11"}>{order.paymentStatus}</span
                >
              </td>
              <td>
                <i class={"fab " + order.methodIcon + " me-1"} />
                {order.paymentMethod}
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                  on:click={togglemodal}
                >
                  View Details
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </CardBody>
</Card>

<Modal
  isOpen={modal}
  role="dialog"
  autoFocus={true}
  data-toggle="modal"
  centered
  toggle={togglemodal}
>
  <div class="modal-content border-bottom-0">
    <div class="modal-header">
      <h5 class="modal-title">Order Details</h5>
      <button
        type="button"
        class="btn-close"
        on:click={togglemodal}
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>

    <ModalBody>
      <p class="mb-2">
        Product id: <span class="text-primary">#SK2540</span>
      </p>
      <p class="mb-4">
        Billing Name:{" "}
        <span class="text-primary">Neal Matthews</span>
      </p>

      <div class="table-responsive">
        <Table class="table align-middle table-nowrap">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div>
                  <img
                    src="/assets/images/product/img-7.png"
                    alt=""
                    class="avatar-sm"
                  />
                </div>
              </th>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">
                    Wireless Headphone (Black)
                  </h5>
                  <p class="text-muted mb-0">$ 225 x 1</p>
                </div>
              </td>
              <td>$ 255</td>
            </tr>
            <tr>
              <th scope="row">
                <div>
                  <img
                    src="/assets/images/product/img-4.png"
                    alt=""
                    class="avatar-sm"
                  />
                </div>
              </th>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">
                    Phone patterned cases
                  </h5>
                  <p class="text-muted mb-0">$ 145 x 1</p>
                </div>
              </td>
              <td>$ 145</td>
            </tr>
            <tr>
              <td colspan="2">
                <h6 class="m-0 text-right">Sub Total:</h6>
              </td>
              <td> $ 400 </td>
            </tr>
            <tr>
              <td colspan="2">
                <h6 class="m-0 text-right">Shipping:</h6>
              </td>
              <td> Free </td>
            </tr>
            <tr>
              <td colspan="2">
                <h6 class="m-0 text-right">Total:</h6>
              </td>
              <td> $ 400 </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button type="button" color="secondary" on:click={togglemodal}>
        Close
      </Button>
    </ModalFooter>
  </div>
</Modal>
