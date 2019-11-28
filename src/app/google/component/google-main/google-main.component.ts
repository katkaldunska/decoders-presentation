import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-google-main',
    templateUrl: './google-main.component.html',
    styleUrls: ['./google-main.component.scss']
})
export class GoogleMainComponent {
    @Input() currentSlide: string;

    public createCluster = `gcloud container cluster create k1`;
    public runCluster = `kubectl run nginx --image=nginx:1.15.7`;
    public getPods = `kubectl get pods`;
    public connectLoadBalancer = `kubectl expose deployments nginx --port=80 --type=LoadBalancer`;
    public getServices = `kubectl get services`;
}
