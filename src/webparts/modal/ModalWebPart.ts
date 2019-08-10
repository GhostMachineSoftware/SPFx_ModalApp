import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ModalWebPart.module.scss';
import * as strings from 'ModalWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
//import 'jquery';
//require('bootstrap');
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

export interface IModalWebPartProps {
  description: string;
}

export default class ModalWebPart extends BaseClientSideWebPart<IModalWebPartProps> {

  public render(): void {

    let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    let faCSSURL = "node_modules/@fortawesome/fontawesome-free/css/all.css";
    SPComponentLoader.loadCss(faCSSURL);

    this.domElement.innerHTML = `
        <button type="button" className="btn btn-info btn-lg" onclick="window.open('', 'MsgWindow', 'width=200,height=100');">Open Window</button>

        <i class="fa fa-envelope"></i>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
