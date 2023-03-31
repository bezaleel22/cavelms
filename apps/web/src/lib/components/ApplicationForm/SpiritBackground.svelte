<script lang="ts">
  import { Col, Form, FormGroup, Input, Label, Row } from "sveltestrap";
  import type { Profile } from "$lib/interface/user_interface";
  import { slide } from "svelte/transition";
  export let profile: Profile;
  export let isExp: boolean;

  $: if (profile.id) profile.godsWorkings = profile.godsWorkings ?? []
</script>

{#if profile.id}
  <div>
    <h5 class="text-primary text-center mb-4">Spiritual Background</h5>
    <Form>
      <div class="mb-4 ms-3">
        <Label class="text-primary" for="gender-inpu6"
          >Any Christain Experience?</Label
        >
        <FormGroup>
          <Input
            name="sb"
            type="radio"
            bind:group={isExp}
            value={true}
            label="Yes"
          />
          <Input
            name="sb"
            type="radio"
            bind:group={isExp}
            value={false}
            label="No"
          />
        </FormGroup>
      </div>
      {#if isExp}
        <p class="text-muted text-primary">
          Check any of the following experiences below that apply to you
        </p>
        <hr />
        <fieldset transition:slide={{ duration: 500 }}>
          <FormGroup class="mb-3 ms-3">
            <Row>
              <Col lg="4">
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I am born again"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am born again
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I speak in tongues"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I speak in tongues
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I have a call of God"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I have a call of God
                  </label>
                </div>
              </Col>
              <Col lg="4">
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I am baptized in water"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am baptized in water
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="Spiritual Gift"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I have at least one spiritual gift
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I am serving in a Ministry"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am serving in a Ministry
                  </label>
                </div>
              </Col>
              <Col lg="4">
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I am baptized in the Holy Spirit"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am baptized in the Holy Spirit
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I am a Church Worker"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am a Church Worker
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.godsWorkings}
                    value="I am a founder/pioneer of a Ministry"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am a founder/pioneer of a Ministry
                  </label>
                </div>
              </Col>
            </Row>
          </FormGroup>
        </fieldset>
      {/if}

      <Row>
        <Col lg="12">
          <FormGroup
            floating
            label="Give a brief account of your conversion experience to faith in Christ"
          >
            <textarea
              style="height: 100px"
              id="salvationExp"
              class="form-control"
              rows="2"
              placeholder="Give a brief account of your conversion experience to faith in Christ"
              bind:value={profile.salvationBrief}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <FormGroup floating label="Why do you want to attend Adullam">
            <textarea
              style="height: 100px"
              id="reason"
              class="form-control"
              rows="2"
              placeholder="Why do you want to attend Adullam"
              bind:value={profile.reason}
            />
          </FormGroup>
        </Col>
      </Row>
      <hr />
      <p class="text-muted mb-4">
        Ministry/Church Details
      </p>
      <Row>
        <Col lg="4">
          <FormGroup floating label="Pastor's Fullname">
            <Input
              type="text"
              class="form-control"
              id="pastorName"
              placeholder="First Name"
              bind:value={profile.pastorName}
            />
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup floating label="Pastor's Email">
            <Input
              type="text"
              class="form-control"
              id="pastorEmail"
              placeholder="Last Name"
              bind:value={profile.pastorEmail}
            />
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup floating label="Pastor's Phone Number">
            <Input
              type="text"
              class="form-control"
              id="pastorPhone"
              placeholder="Middle Name"
              bind:value={profile.pastorPhone}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup floating label="Name of Ministry">
            <Input
              type="text"
              class="form-control"
              id="churchName"
              placeholder="Name of Ministry"
              bind:value={profile.churchName}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup floating label="Ministry Address">
            <textarea
              rows="1"
              class="form-control"
              id="churchAddress"
              placeholder="Ministry Address"
              bind:value={profile.churchAddress}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  </div>
{/if}
