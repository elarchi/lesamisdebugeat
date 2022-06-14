//Importation des feuilles de style
import "./status.scss";
const Status = () => {
  return (
    <div className="status__div container">
      <h1>Les status de l'association</h1>
      <div className="txt__div">
        <h2>Article 1</h2>
        <p>
          Il est fondé entre les adhérents aux présents statuts une association
          régie par la loi du 1er juillet 1901 et le décret du 16 août 1901,
          ayant pour titre :" LES AMIS DU PAYS DE BUGEAT ".
        </p>
        <h2>Article 2</h2>
        <p>
          Cette association a pour but : "FAIRE CONNAÎTRE ET PROMOUVOIR LE PAYS
          DE BUGEAT"
        </p>
        <h2>Article 3 : Siège social</h2>
        <p>
          Le siège social est fixé à la Mairie de BUGEAT (19170). Il pourra être
          transféré par simple décision du Conseil d’Administration. La
          ratification par l'assemblée générale sera nécessaire.
        </p>
        <h2>Article 4</h2>
        <p>L'association se compose de :</p>
        <ol type="a">
          <li>membres d'honneur,</li>
          <li>membres bienfaiteurs,</li>
          <li>membres actifs ou adhérents</li>
        </ol>
        <h2>Article 5 : Admission</h2>
        <p>
          Pour faire partie de l'association, il faut être agréé par le bureau
          qui statue, lors de chacune de ses réunions, sur les demandes
          d'admission présentées.
        </p>
        <h2>Article 6 : Les membres</h2>
        <p>
          Sont membres d'honneur, ceux qui ont rendu des services signalés à
          l'association. Sont membres bienfaiteurs ou actifs, les personnes qui
          versent une cotisation annuelle de 50 euros, somme fixée chaque année
          par l'Assemblée Générale.
        </p>
        <p>
          L'association est depuis le 12 janvier 2012 considérée comme un
          organisme d'intérêt général et les versements ouvrent droit à une
          réduction d'impôt égale à 66% des sommes versées (article 200 du Code
          Général des impôts).
        </p>
        <h2>Article 7 : Radiations</h2>
        <p>La qualité de membre se perd par :</p>
        <ol type="a">
          <li>la démission,</li>
          <li>le décès,</li>
          <li>
            la radiation prononcée par le Conseil d'Administration pour non
            paiement de la Cotisation ou pour motif grave, l'intéressé ayant été
            invité par lettre recommandée à se présenter devant le bureau pour
            fournir des explications.
          </li>
        </ol>
        <h2>Article 8</h2>
        <p>Les ressources de l'association comprennent :</p>
        <ol type="1">
          <li>le montant des droits d'entrée et de cotisations,</li>
          <li>les subventions de l'Etat, des départements et des communes</li>
        </ol>
        <h2>Article 9 : Conseil d'Administration</h2>
        <p>
          L’association est dirigée par un conseil de membres, élus pour 2
          années par l'Assemblée Générale. Les membres sont rééligibles.
        </p>
        <p>
          Le Conseil d'Administration choisit parmi ses membres, au scrutin
          secret, un bureau composé de :
        </p>
        <ol type="1">
          <li>un Président,</li>
          <li>un ou plusieurs Vice-Présidents,</li>
          <li>un Secrétaire, un Secrétaire-Adjoint,</li>
          <li>un Trésorier, un Trésorier-Adjoint.</li>
        </ol>
        <p>
          Le Conseil étant renouvelé chaque année par moitié, la première année,
          les membres sortants sont désignés par le sort.
        </p>
        <p>
          En cas de vacances, le conseil pourvoit provisoirement au
          remplacement, validé par la plus prochaine assemblée générale. Les
          pouvoirs des, membres ainsi élus prennent fin à l’époque où devrait
          normalement expirer le mandat des membres remplacés
        </p>{" "}
        <h2>Article 10 : Réunion du Conseil d'Administration</h2>
        <p>
          Le Conseil d'Administration se réunit une fois au moins tous les six
          mois, sur convocation du Président, ou sur la demande du quart de ses
          membres.
        </p>
        <p>
          Les décisions sont prises à la majorité des voix; en cas de partage,
          la voi.x du Président est prépondérante.
        </p>
        <h2>Article 11 : Assemblée Générale Ordinaire</h2>
        <p>
          L'assemblée générale ordinaire comprend tous les membres de
          l'association à quelque titre qu'ils y soient affiliés. L’assemblée
          générale ordinaire se réunit chaque année au mois de mai.
        </p>
        <h2>Article 12 : Assemblée Générale Extraordinaire</h2>
        <p>
          Si besoin est, ou sur la demande de la moitié plus un des membres
          inscrits, le Président peut convoquer une assemblée générale
          extraordinaire, suivant les formalités prévues par l'article 10.
        </p>
        <h2>Article 13 : Réglement Intérieur</h2>
        <p>
          Un règlement intérieur peut être établi par le Conseil
          d'Administration qui. le fait alors approuver par l'Assemblée
          Générale.
        </p>
        <p>
          Ce règlement éventuel est destiné à fixer les divers points non prévus
          par les statuts, notamment ceux qui ont trait à l'administration
          interne de l'association.
        </p>
        <h2>Article 14 : Dissolution</h2>
        <p>
          En cas de dissolution prononcée par les deux tiers au moins des
          membres présents à l’Assemblée générale, un ou plusieurs liquidateurs
          sont nommés par celle-ci et l'actif, s'il y lieu, est dévolu
          conformément à l'article 9 de la loi du 1er juillet 1901 et au décret
          du 16 août 1901.
        </p>
      </div>
      <p className="signatures__p">À la Mairie de Bugeat, le 11 mai 1991</p>

      <div className="signatures__div">
        <div className="signature__div">
          <h2>Le Président</h2>
          Jean-Marie Bourre
        </div>
        <div className="signature__div">
          <h2>Le Trésorier</h2>
          Jean-Marie Mourieras
        </div>
        <div className="signature__div">
          <h2>Le Secrétaire</h2>
          Jacques S'I'Amm
        </div>
      </div>
    </div>
  );
};

export default Status;
