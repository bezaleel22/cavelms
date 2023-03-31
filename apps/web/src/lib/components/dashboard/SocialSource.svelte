<script lang="ts">
  import { Row, Col, Card, CardBody, CardTitle } from "sveltestrap";

  const socials = [
    {
      title: "Facebook",
      bgColor: "bg-primary",
      iconClass: "mdi-facebook",
      description: "0",
    },
    {
      title: "Twitter",
      bgColor: "bg-info",
      iconClass: "mdi-twitter",
      description: "0",
    },
    {
      title: "Instagram",
      bgColor: "bg-pink",
      iconClass: "mdi-instagram",
      description: "0",
    },
  ];
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4 h4">Social Source</CardTitle>
    <!-- <div class="text-center">
      <div class="avatar-sm mx-auto mb-4">
        <span
          class="avatar-title rounded-circle bg-primary bg-soft font-size-24"
        >
          <i class="mdi mdi-facebook text-primary" />
        </span>
      </div>
      <p class="font-16 text-muted mb-2" />
      <h5>
        <a href="/#" class="text-dark">
          Facebook -{" "}
          <span class="text-muted font-16">125 sales</span>{" "}
        </a>
      </h5>
      <p class="text-muted">
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
        venenatis faucibus tincidunt.
      </p>
      <a href="/#" class="text-primary font-16">
        Learn more <i class="mdi mdi-chevron-right" />
      </a>
    </div> -->
    <Row class="mt-4">
      {#each socials as social}
        <Col xs="4">
          <div class="social-source text-center mt-3">
            <div class="avatar-xs mx-auto mb-3">
              <span
                class={"avatar-title rounded-circle " +
                  social.bgColor +
                  " font-size-16"}
              >
                <i class={"mdi " + social.iconClass + " text-white"} />
              </span>
            </div>
            <h5 class="font-size-15">{social.title}</h5>
            <p class="text-muted mb-0">
              {social.description} converts
            </p>
          </div>
        </Col>
      {/each}
    </Row>
  </CardBody>
</Card>
