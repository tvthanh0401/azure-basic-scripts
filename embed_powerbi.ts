import { Component, OnInit } from '@angular/core';
import * as powerbiClient from 'powerbi-client';
import * as models from 'powerbi-models';
@Component({
  selector: 'app-test-pbi',
  templateUrl: './test-pbi.component.html',
  styleUrls: ['./test-pbi.component.css']
})
export class TestPBIComponent implements OnInit {

  loadedResolve: any;
  reportLoaded = new Promise((res) => { this.loadedResolve = res; });
  renderedResolve: any;
  reportRendered = new Promise((res) => { this.renderedResolve = res; });
  powerbi: powerbiClient.service.Service = window["powerbi"];
  constructor() { }

  ngOnInit(): void {
    this.embedPowerBIReport();
  }

  embedPowerBIReport() {
    /*-----------------------------------------------------------------------------------+
    |    Don't change these values here: access token, embed URL and report ID.          |
    |    To make changes to these values:                                                |
    |    1. Save any other code changes to a text editor, as these will be lost.         |
    |    2. Select 'Start over' from the ribbon.                                         |
    |    3. Select a report or use an embed token.                                       |
    +-----------------------------------------------------------------------------------*/
    // Read embed application token
    let accessToken: string = "";

    // Read embed URL
    let embedUrl: string = "";

    // Read report Id
    let embedReportId: string = "";


    // We give All permissions to demonstrate switching between View and Edit mode and saving report.
    let permissions: models.Permissions = models.Permissions.All;

    // Create the embed configuration object for the report
    // For more information see https://go.microsoft.com/fwlink/?linkid=2153590
    let config: models.IReportEmbedConfiguration = {
        type: 'report',
        tokenType: models.TokenType.Embed,
        accessToken: accessToken,
        embedUrl: embedUrl,
        id: embedReportId,
        permissions: permissions,
        settings: {
            panes: {
                filters: {
                    visible: true
                },
                pageNavigation: {
                    visible: true
                }
            }
        }
    };

    // Get a reference to the embedded report HTML element
    let embedContainer = document.getElementById('embedContainer');

    // Embed the report and display it within the div container.
    let report = this.powerbi.embed(embedContainer!, config) as powerbiClient.Report;

    // report.off removes all event handlers for a specific event
    // report.off("loaded");

    // // report.on will add an event handler
    // report.on("loaded", function () {
    //     this.loadedResolve();
    //     report.off("loaded");
    // });

    // // report.off removes all event handlers for a specific event
    // report.off("error");

    // report.on("error", function (event: powerbiClient.service.ICustomEvent<any>) {
    //     console.log(event.detail);
    // });

    // // report.off removes all event handlers for a specific event
    // report.off("rendered");

    // // report.on will add an event handler
    // report.on("rendered", function () {
    //     this.renderedResolve();
    //     report.off("rendered");
    // });
}
}
