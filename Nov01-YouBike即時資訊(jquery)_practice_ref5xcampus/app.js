$().ready(() => {
  const url =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

  const keyword = $("#searchKeyword");

  const form = $("#searchForm");

  form.submit((e) => {
    e.preventDefault();

    const sv = keyword.val();

    if (sv != "") {
      $.ajax({ url }).done((sites) => {
        const siteList = $(".siteList");
        siteList.html("");

        sites
          .filter((site) => {
            return site.ar.includes(sv);
          })
          .forEach((site) => {
            const item = `<li class="list-group-item fs-5">
            <i class="fas fa-bicycle"></i>
            ${site.sna.replace("YouBike2.0_", "")}(${site.sbi})<br>
            <small class="text-muted">${site.ar}</small>
          </li>`;

            siteList.append(item);
          });
      });
    }
  });
});
