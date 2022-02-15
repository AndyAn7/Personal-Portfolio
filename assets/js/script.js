$('.modal').dialog({
    modal: true,
    buttons: [
      {
        text: "Done",
        click: function () {
          $(this).dialog("close");
        }
      }
    ],
    minWidth: 800,
  });

  $('.modal').dialog("close");

  const aboutClicked = () => {
    //   console.log('aboutClicked')
    $('.modal').dialog('open')
  }

  $('#aboutModal').on('click', aboutClicked)