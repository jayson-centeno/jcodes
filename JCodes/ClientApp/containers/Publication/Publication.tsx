import * as React from "React";
import * as PublicationStore from '../../store/Publications'

type PublicationProps = PublicationStore.PublicationsState;
 
export class Publication extends React.Component<PublicationProps, {}> {

    renderPublications = (publications?: PublicationStore.Publication[]) =>  {
        if (publications && publications.length > 0) {
            return publications.map((item, index) => (
                <li key={item.id}>
                    <a className="link link-strong">{item.title}</a>
                    <p>
                        {item.description}
                    </p>
                </li>
            ));
        }
        else return [];
    }
     
    public render() {
        return <div className={this.props.isLoading ? "row hidden" : "row"}>
            <div className="col-md-12">
                <ul className="pub-parent">
                    {this.renderPublications(this.props.publications)}
                </ul>
            </div>
        </div>
    }

}