import com.meituan.retail.android.rn.push.rnmodule.RnPushModulePackage;  //添加类引入
import java.util.Arrays;
import java.util.List;
 
public class ReactNativeHostImpl extends ReactNativeHost {
 
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RnPushModulePackage() //添加rnpush native package
        );
    }
}