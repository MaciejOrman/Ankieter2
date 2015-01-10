package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import pl.wroc.pwr.data.models.baseTypes.Osoba;

@Entity
public class Audytor extends Osoba {
	@OneToMany
	private List<PlanowanieAnkietyzacji> planowaniaAnkietyzacji;
	
	protected Audytor(){}

	public List<PlanowanieAnkietyzacji> getPlanowaniaAnkietyzacji() {
		return planowaniaAnkietyzacji;
	}

	public void setPlanowaniaAnkietyzacji(List<PlanowanieAnkietyzacji> planowaniaAnkietyzacji) {
		this.planowaniaAnkietyzacji = planowaniaAnkietyzacji;
	}
	
	
}