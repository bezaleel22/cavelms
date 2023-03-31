<script>
  import { Card, CardBody, CardTitle, Table } from "sveltestrap";
  export let files;
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4">Attached Files</CardTitle>
    <div class="table-responsive">
      <Table class="table table-nowrap align-middle table-hover mb-0">
        <tbody>
          {#each files as file}
            <tr>
              <td style="width: 45px">
                <div class="avatar-sm">
                  <span
                    class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-24"
                  >
                    <i class="bx bxs-file-doc" />
                  </span>
                </div>
              </td>
              <td>
                <h5 class="font-size-14 mb-1">
                  <a href="/#" class="text-dark">
                    {file.name}
                  </a>
                </h5>
                <small>Size : {file.size}</small>
              </td>
              <td>
                <div class="text-center">
                  <a href={file.link} class="text-dark">
                    <i class="bx bx-download h3 m-0" />
                  </a>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </div>
  </CardBody>
</Card>
