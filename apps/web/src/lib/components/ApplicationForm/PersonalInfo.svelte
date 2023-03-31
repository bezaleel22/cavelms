<script lang="ts">
  import type { Profile } from "$lib/interface/user_interface";
  import { Col, Form, FormGroup, Input, Label, Row } from "sveltestrap";
  export let profile: Profile;
  let gender: strin;
</script>

<h5 class="text-primary text-center mb-4">Personal Information</h5>
<FormGroup>
  <Form>
    <Row>
      <Col lg="4">
        <FormGroup floating label="First Name">
          <Input
            type="text"
            class="form-control"
            id="firstname-input1"
            placeholder="First Name"
            bind:value={profile.firstName}
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup floating label="Last Name">
          <Input
            type="text"
            class="form-control"
            id="lastname-input2"
            placeholder="Last Name"
            bind:value={profile.lastName}
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup floating label="Middle Name">
          <Input
            type="text"
            class="form-control"
            id="middlename-input2"
            placeholder="Middle Name"
            bind:value={profile.middleName}
          />
        </FormGroup>
      </Col>
    </Row>

    <Row>
      <Col lg="4">
        <FormGroup floating label="Phone">
          <Input
            type="text"
            class="form-control"
            id="phoneno-input3"
            placeholder="Phone"
            bind:value={profile.phone}
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup floating label="Email">
          <Input
            disabled
            type="email"
            class="form-control"
            id="email-input4"
            placeholder="Email"
            bind:value={profile.email}
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup floating label="Date of Birth">
          <input
            type="date"
            class="form-control"
            id="dob-input5"
            placeholder="Date of Birth"
            bind:value={profile.dob}
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <div>
          <Label for="gender-inpu6">Gender</Label>
          <FormGroup>
            <Input
              id="r1"
              type="radio"
              bind:group={profile.gender}
              value="male"
              label="Male"
            />
            <Input
              id="r2"
              type="radio"
              bind:group={profile.gender}
              value="female"
              label="Female"
            />
          </FormGroup>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <FormGroup floating label="Address">
          <textarea
            style="height: 100px"
            id="address-input1"
            class="form-control"
            rows="3"
            placeholder="Address"
            bind:value={profile.address}
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        <FormGroup floating label="City">
          <Input
            type="text"
            class="form-control"
            id="city-input8"
            placeholder="City"
            bind:value={profile.city}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup floating label="State">
          <Input
            type="text"
            class="form-control"
            id="satae-input9"
            placeholder="State"
            bind:value={profile.state}
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        <FormGroup floating label="Country">
          <Input
            type="text"
            class="form-control"
            id="country-input10"
            placeholder="Country"
            bind:value={profile.country}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup floating label="Zip Code">
          <Input
            type="text"
            class="form-control"
            id="zip-input11"
            placeholder="Zip Code"
            bind:value={profile.zip}
          />
        </FormGroup>
      </Col>
    </Row>
  </Form>
</FormGroup>

<style>
  input {
    color-scheme: light;
  }
</style>
