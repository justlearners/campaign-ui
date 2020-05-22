import { Injectable } from '@angular/core';
import { Campaign } from './campaign.model';


@Injectable()
export class CampaignService{

    campaigns : Campaign[] = [
        new Campaign('Namokar Path', `
        The Navkar Mantra is the most fundamental mantra in Jainism and can be
        recited at any time of the day.  While reciting the Navkar Mantra, the
        aspirant bows with respect to Arihantas, Siddhas, Acharyas, Upadhyayas,
        Sadhus, and Sadhvis. The mantra enables us to worship the virtues of
        all the supreme spiritual people instead of just worshipping one
        particular person. For this reason,  the Navkar Mantra does not mention
        the names of any Tirthankaras, Siddhas, Acharyas, Upadhyayas, Sadhus,
        or Sadhvis. At the time of recitation, we remember their virtues and
        try to emulate them. In this mantra we bow down to these supreme
        spiritual personalities, and therefore, it is also called Namaskar or
        Namokar Mantra.
        
            The Navkar Mantra contains the essence of  Jainism.  It points out that
        if we want to be truly liberated, we have to give up worldly life
        (samsar). The first stage of renunciation is to become a monk (sadhu)
        or nun (sadhvi). While progressing on a spiritual path, some may be
        designated as Upadhyayas or Acharya. The ultimate aim is to attain
        omniscience, becoming an Arihanta, which leads us to liberation, the
        becoming a Siddha.`,
        '2020-05-18','2020-05-28 ',5),

        new Campaign('Mahavir Jayanti','','','',1),
        new Campaign('Dasalaksanaparvan','','','',1),
        new Campaign('Mahamastak Abhisheka','','','',1),     

       
    ];


    getCampaign(){
        return this.campaigns.slice();        
    }

    getCampaign1(index:number){
        return this.campaigns[index];
    }

    
}





