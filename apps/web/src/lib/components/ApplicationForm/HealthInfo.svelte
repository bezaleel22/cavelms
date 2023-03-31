<script lang="ts">
  import { browser } from "$app/environment";
  import type { Profile } from "$lib/interface/user_interface";
  import { slide } from "svelte/transition";
  import { Col, Form, FormGroup, Input, Label, Row } from "sveltestrap";
  export let profile: Profile;
  export let platform;
  export let isCondition: boolean;

  $: if (profile.id) profile.healthConditions = profile.healthConditions ?? []
</script>

{#if platform === "On-Campos"}
  <div>
    <h5 class="text-primary text-center mb-4">Health/Medical Information</h5>
    <Form>
      <div class="mb-4 ms-3">
        <Label class="text-primary" for="gender-inpu6">
          Any Health Challenges?</Label
        >
        <FormGroup>
          <Input
            id="r1"
            name="health"
            type="radio"
            bind:group={isCondition}
            value={true}
            label="Yes"
          />
          <Input
            id="r2"
            name="health"
            type="radio"
            bind:group={isCondition}
            value={false}
            label="No"
          />
        </FormGroup>
      </div>
      {#if isCondition}
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
                    bind:group={profile.healthConditions}
                    value="Disability"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I have a disability
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.healthConditions}
                    value="I’m on regular medication"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I’m on regular medication
                  </label>
                </div>
              </Col>
              <Col lg="4">
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.healthConditions}
                    value="I have a Nervous/Mental illness"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I have a Mental illness
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.healthConditions}
                    value="I require a special diet"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I require a special diet
                  </label>
                </div>
              </Col>
              <Col lg="4">
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.healthConditions}
                    value="I am diabetic"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I am diabetic
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    bind:group={profile.healthConditions}
                    value="I have a learning disability"
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    I have a learning disability
                  </label>
                </div>
              </Col>
            </Row>
          </FormGroup>

          <Row>
            <Col lg="12">
              <FormGroup floating label="Other Health Issues Description">
                <textarea
                  style="height: 100px"
                  id="address-input1"
                  class="form-control"
                  rows="3"
                  placeholder="Other Health Issues Description"
                  bind:value={profile.healthIssueDescription}
                />
              </FormGroup>
            </Col>
          </Row>
        </fieldset>
      {/if}
    </Form>
  </div>
{/if}
